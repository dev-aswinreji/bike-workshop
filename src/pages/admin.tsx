import { useState } from 'react'
import { Search, Filter, MoreVertical } from 'lucide-react'

const Admin = () => {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('all')

  const bookings = [
    {
      id: 1,
      customer: 'Mike Johnson',
      bike: 'Harley Davidson',
      service: 'Engine Repair',
      date: '2024-01-15',
      status: 'pending'
    },
    {
      id: 2,
      customer: 'Sarah Chen',
      bike: 'Ducati',
      service: 'Brake Service',
      date: '2024-01-16',
      status: 'confirmed'
    },
    {
      id: 3,
      customer: 'David Wilson',
      bike: 'BMW',
      service: 'Oil Change',
      date: '2024-01-17',
      status: 'completed'
    },
  ]

  const statusColors: Record<string, string> = {
    pending: 'bg-yellow-100 text-yellow-800',
    confirmed: 'bg-blue-100 text-blue-800',
    completed: 'bg-green-100 text-green-800',
    cancelled: 'bg-red-100 text-red-800'
  }

  return (
    <div className="mobile-padding">
      <section className="section-spacing">
        <div className="minimal-container">
          <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: 'Total Bookings', value: '24', change: '+2' },
              { label: 'Pending', value: '3', change: '+1' },
              { label: 'Completed', value: '18', change: '+3' },
              { label: 'Revenue', value: '$4,850', change: '+$320' },
            ].map((stat, index) => (
              <div key={index} className="simple-card p-4">
                <div className="text-sm text-muted mb-1">{stat.label}</div>
                <div className="flex items-baseline">
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="ml-2 text-sm text-green-600">{stat.change}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Search and Filter */}
          <div className="simple-card p-4 mb-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search bookings..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900"
                />
              </div>
              
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900"
              >
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="confirmed">Confirmed</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
          </div>

          {/* Bookings Table */}
          <div className="simple-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-4 font-medium text-sm text-gray-700">Customer</th>
                    <th className="text-left p-4 font-medium text-sm text-gray-700">Motorcycle</th>
                    <th className="text-left p-4 font-medium text-sm text-gray-700">Service</th>
                    <th className="text-left p-4 font-medium text-sm text-gray-700">Date</th>
                    <th className="text-left p-4 font-medium text-sm text-gray-700">Status</th>
                    <th className="text-left p-4 font-medium text-sm text-gray-700"></th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((booking) => (
                    <tr key={booking.id} className="border-t border-gray-200 hover:bg-gray-50">
                      <td className="p-4">
                        <div>
                          <div className="font-medium">{booking.customer}</div>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="font-medium">{booking.bike}</div>
                      </td>
                      <td className="p-4">
                        <div className="font-medium">{booking.service}</div>
                      </td>
                      <td className="p-4">
                        <div className="font-medium">{booking.date}</div>
                      </td>
                      <td className="p-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[booking.status]}`}>
                          {booking.status}
                        </span>
                      </td>
                      <td className="p-4">
                        <button className="p-1 hover:bg-gray-100 rounded">
                          <MoreVertical className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <button className="simple-card p-4 text-left hover:border-gray-900 transition-colors">
                <div className="font-medium">Add Booking</div>
                <div className="text-sm text-muted">Create new booking</div>
              </button>
              <button className="simple-card p-4 text-left hover:border-gray-900 transition-colors">
                <div className="font-medium">View Calendar</div>
                <div className="text-sm text-muted">Schedule view</div>
              </button>
              <button className="simple-card p-4 text-left hover:border-gray-900 transition-colors">
                <div className="font-medium">Reports</div>
                <div className="text-sm text-muted">Generate reports</div>
              </button>
              <button className="simple-card p-4 text-left hover:border-gray-900 transition-colors">
                <div className="font-medium">Settings</div>
                <div className="text-sm text-muted">System settings</div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Admin
