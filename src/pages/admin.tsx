import { useState, useEffect } from 'react'
import { Search, Filter, Edit, Trash2, CheckCircle, Clock, XCircle, Bike } from 'lucide-react'
import type { AdminBooking } from '../types'

const Admin = () => {
  const [bookings, setBookings] = useState<AdminBooking[]>([])
  const [filter, setFilter] = useState('all')
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)

  // Mock data for demonstration
  useEffect(() => {
    const mockBookings: AdminBooking[] = [
      {
        id: 1,
        name: 'Mike Johnson',
        email: 'mike@example.com',
        phone: '(555) 123-4567',
        bikeType: 'cruiser',
        bikeBrand: 'Harley Davidson',
        serviceType: 'engine',
        preferredDate: '2024-01-15',
        preferredTime: 'morning',
        description: 'Engine making strange noise',
        status: 'pending',
        createdAt: '2024-01-10'
      },
      {
        id: 2,
        name: 'Sarah Chen',
        email: 'sarah@example.com',
        phone: '(555) 123-4568',
        bikeType: 'sport',
        bikeBrand: 'Ducati',
        serviceType: 'premium',
        preferredDate: '2024-01-16',
        preferredTime: 'afternoon',
        description: 'Complete service before track day',
        status: 'confirmed',
        createdAt: '2024-01-09'
      },
      {
        id: 3,
        name: 'David Wilson',
        email: 'david@example.com',
        phone: '(555) 123-4569',
        bikeType: 'adventure',
        bikeBrand: 'BMW',
        serviceType: 'overhaul',
        preferredDate: '2024-01-18',
        preferredTime: 'morning',
        description: 'Suspension needs adjustment',
        status: 'in-progress',
        createdAt: '2024-01-08'
      },
      {
        id: 4,
        name: 'Alex Rodriguez',
        email: 'alex@example.com',
        phone: '(555) 123-4570',
        bikeType: 'naked',
        bikeBrand: 'Yamaha',
        serviceType: 'emergency',
        preferredDate: '2024-01-14',
        preferredTime: 'evening',
        description: 'Brake failure emergency',
        status: 'completed',
        createdAt: '2024-01-07'
      },
    ]

    setTimeout(() => {
      setBookings(mockBookings)
      setLoading(false)
    }, 1000)
  }, [])

  const filteredBookings = bookings.filter(booking => {
    const matchesFilter = filter === 'all' || booking.status === filter
    const matchesSearch = search === '' || 
      booking.name.toLowerCase().includes(search.toLowerCase()) ||
      booking.email.toLowerCase().includes(search.toLowerCase()) ||
      booking.bikeBrand.toLowerCase().includes(search.toLowerCase())
    return matchesFilter && matchesSearch
  })

  const updateStatus = (id: number, status: AdminBooking['status']) => {
    setBookings(prev => prev.map(booking => 
      booking.id === id ? { ...booking, status } : booking
    ))
  }

  const deleteBooking = (id: number) => {
    setBookings(prev => prev.filter(booking => booking.id !== id))
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending': return <Clock className="w-5 h-5 text-yellow-500" />
      case 'confirmed': return <CheckCircle className="w-5 h-5 text-green-500" />
      case 'in-progress': return <Bike className="w-5 h-5 text-blue-500" />
      case 'completed': return <CheckCircle className="w-5 h-5 text-green-500" />
      case 'cancelled': return <XCircle className="w-5 h-5 text-red-500" />
      default: return null
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-500/20 text-yellow-500'
      case 'confirmed': return 'bg-green-500/20 text-green-500'
      case 'in-progress': return 'bg-blue-500/20 text-blue-500'
      case 'completed': return 'bg-green-500/20 text-green-500'
      case 'cancelled': return 'bg-red-500/20 text-red-500'
      default: return ''
    }
  }

  const stats = [
    { label: 'Total Bookings', value: bookings.length, color: 'text-white' },
    { label: 'Pending', value: bookings.filter(b => b.status === 'pending').length, color: 'text-yellow-500' },
    { label: 'In Progress', value: bookings.filter(b => b.status === 'in-progress').length, color: 'text-blue-500' },
    { label: 'Completed', value: bookings.filter(b => b.status === 'completed').length, color: 'text-green-500' },
  ]

  if (loading) {
    return (
      <div className="moto-mobile-padding">
        <div className="container-moto pt-32">
          <div className="flex justify-center items-center h-64">
            <div className="moto-loading">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="moto-mobile-padding">
      {/* Header */}
      <section className="pt-28 pb-12 md:pt-32 md:pb-16">
        <div className="container-moto">
          <h1 className="moto-heading mb-6">
            <span className="chrome-text">ADMIN</span>
            <span className="block text-orange-500">DASHBOARD</span>
          </h1>
          <p className="text-xl text-gray-300">
            Manage motorcycle service bookings and customer requests.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8">
        <div className="container-moto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="card-moto p-6 text-center">
                <div className={`text-3xl font-black ${stat.color} mb-2`}>{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8">
        <div className="container-moto">
          <div className="card-moto p-6">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search bookings..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-lg bg-gray-900 border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500"
                />
              </div>

              {/* Filter */}
              <div className="flex items-center gap-4">
                <Filter className="w-5 h-5 text-orange-500" />
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="px-4 py-3 rounded-lg bg-gray-900 border border-gray-800 text-white focus:outline-none focus:border-orange-500"
                >
                  <option value="all">All Status</option>
                  <option value="pending">Pending</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="in-progress">In Progress</option>
                  <option value="completed">Completed</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bookings Table */}
      <section className="py-8">
        <div className="container-moto">
          <div className="card-moto overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-900">
                    <th className="text-left p-6 font-bold text-white uppercase tracking-wide">Customer</th>
                    <th className="text-left p-6 font-bold text-white uppercase tracking-wide">Motorcycle</th>
                    <th className="text-left p-6 font-bold text-white uppercase tracking-wide">Service</th>
                    <th className="text-left p-6 font-bold text-white uppercase tracking-wide">Date</th>
                    <th className="text-left p-6 font-bold text-white uppercase tracking-wide">Status</th>
                    <th className="text-left p-6 font-bold text-white uppercase tracking-wide">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredBookings.map((booking) => (
                    <tr key={booking.id} className="border-t border-gray-800 hover:bg-gray-900/50">
                      <td className="p-6">
                        <div>
                          <div className="font-bold text-white">{booking.name}</div>
                          <div className="text-sm text-gray-400">{booking.email}</div>
                          <div className="text-sm text-gray-400">{booking.phone}</div>
                        </div>
                      </td>
                      <td className="p-6">
                        <div>
                          <div className="font-medium text-white">{booking.bikeBrand}</div>
                          <div className="text-sm text-gray-400">{booking.bikeType}</div>
                        </div>
                      </td>
                      <td className="p-6">
                        <div>
                          <div className="font-medium text-white">{
                            booking.serviceType === 'engine' ? 'Engine Tune-up' :
                            booking.serviceType === 'premium' ? 'Premium Service' :
                            booking.serviceType === 'overhaul' ? 'Complete Overhaul' :
                            'Emergency Repair'
                          }</div>
                          <div className="text-sm text-gray-400">{booking.preferredTime}</div>
                        </div>
                      </td>
                      <td className="p-6">
                        <div>
                          <div className="font-medium text-white">
                            {new Date(booking.preferredDate).toLocaleDateString()}
                          </div>
                          <div className="text-sm text-gray-400">
                            {new Date(booking.createdAt).toLocaleDateString()}
                          </div>
                        </div>
                      </td>
                      <td className="p-6">
                        <div className="flex items-center gap-2">
                          {getStatusIcon(booking.status)}
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(booking.status)}`}>
                            {booking.status}
                          </span>
                        </div>
                      </td>
                      <td className="p-6">
                        <div className="flex gap-2">
                          <select
                            value={booking.status}
                            onChange={(e) => updateStatus(booking.id, e.target.value as AdminBooking['status'])}
                            className="px-3 py-2 rounded-lg bg-gray-900 border border-gray-800 text-white text-sm focus:outline-none focus:border-orange-500"
                          >
                            <option value="pending">Pending</option>
                            <option value="confirmed">Confirmed</option>
                            <option value="in-progress">In Progress</option>
                            <option value="completed">Completed</option>
                            <option value="cancelled">Cancelled</option>
                          </select>
                          <button
                            onClick={() => deleteBooking(booking.id)}
                            className="p-2 rounded-lg bg-red-500/20 text-red-500 hover:bg-red-500/30 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {filteredBookings.length === 0 && (
                <div className="text-center py-16">
                  <Search className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">No bookings found</h3>
                  <p className="text-gray-400">Try changing your search or filter criteria</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16">
        <div className="container-moto">
          <h2 className="text-2xl font-black text-white mb-8">Quick Actions</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <button className="card-moto p-6 text-left hover:border-orange-500 transition-colors group">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-white mb-2">View Reports</h3>
              <p className="text-gray-400">Generate service and revenue reports</p>
            </button>
            <button className="card-moto p-6 text-left hover:border-orange-500 transition-colors group">
              <div className="text-3xl mb-4">👥</div>
              <h3 className="text-xl font-bold text-white mb-2">Manage Staff</h3>
              <p className="text-gray-400">View and manage mechanics schedule</p>
            </button>
            <button className="card-moto p-6 text-left hover:border-orange-500 transition-colors group">
              <div className="text-3xl mb-4">📦</div>
              <h3 className="text-xl font-bold text-white mb-2">Inventory</h3>
              <p className="text-gray-400">Manage parts and supplies inventory</p>
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Admin
