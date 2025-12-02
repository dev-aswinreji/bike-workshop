import React, { useState, useEffect } from 'react';
import type { Booking } from '../types';

const Admin: React.FC = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedStatus, setSelectedStatus] = useState<{ [key: number]: string }>({});

  // Mock data for demonstration
  const mockBookings: Booking[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      phone: '(555) 123-4567',
      bikeType: 'road',
      serviceType: 'basic-tuneup',
      preferredDate: '2024-01-15',
      preferredTime: 'morning',
      description: 'Need a basic tune-up for my road bike. Brakes are making noise.',
      status: 'pending',
      createdAt: '2024-01-10'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      phone: '(555) 123-4568',
      bikeType: 'mountain',
      serviceType: 'premium-tuneup',
      preferredDate: '2024-01-16',
      preferredTime: 'afternoon',
      description: 'Full service needed for mountain biking season.',
      status: 'confirmed',
      createdAt: '2024-01-09'
    },
    {
      id: 3,
      name: 'Mike Johnson',
      email: 'mike@example.com',
      phone: '(555) 123-4569',
      bikeType: 'electric',
      serviceType: 'overhaul',
      preferredDate: '2024-01-18',
      preferredTime: 'morning',
      description: 'Complete overhaul of electric bike after winter storage.',
      status: 'in-progress',
      createdAt: '2024-01-08'
    }
  ];

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setBookings(mockBookings);
      setLoading(false);
    }, 1000);
  }, []);

  const updateBookingStatus = (id: number, status: string) => {
    setBookings(prev => prev.map(booking => 
      booking.id === id ? { ...booking, status } : booking
    ));
    setSelectedStatus(prev => ({ ...prev, [id]: status }));
  };

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      'pending': 'badge-warning',
      'confirmed': 'badge-info',
      'in-progress': 'badge-primary',
      'completed': 'badge-success',
      'cancelled': 'badge-error'
    };
    
    return `badge ${statusConfig[status as keyof typeof statusConfig] || 'badge-neutral'}`;
  };

  const getStatusText = (status: string) => {
    return status.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center h-64">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
        <p className="text-lg text-gray-600">Manage bike service bookings and customer requests</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
        <div className="stat bg-base-200 rounded-lg">
          <div className="stat-title">Total Bookings</div>
          <div className="stat-value">{bookings.length}</div>
        </div>
        <div className="stat bg-base-200 rounded-lg">
          <div className="stat-title">Pending</div>
          <div className="stat-value">{bookings.filter(b => b.status === 'pending').length}</div>
        </div>
        <div className="stat bg-base-200 rounded-lg">
          <div className="stat-title">In Progress</div>
          <div className="stat-value">{bookings.filter(b => b.status === 'in-progress').length}</div>
        </div>
        <div className="stat bg-base-200 rounded-lg">
          <div className="stat-title">Completed</div>
          <div className="stat-value">{bookings.filter(b => b.status === 'completed').length}</div>
        </div>
        <div className="stat bg-base-200 rounded-lg">
          <div className="stat-title">Confirmed</div>
          <div className="stat-value">{bookings.filter(b => b.status === 'confirmed').length}</div>
        </div>
      </div>

      {/* Bookings Table */}
      <div className="card bg-base-200 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl mb-6">Recent Bookings</h2>
          
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Customer</th>
                  <th>Service</th>
                  <th>Date & Time</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking.id}>
                    <td>#{booking.id}</td>
                    <td>
                      <div>
                        <div className="font-bold">{booking.name}</div>
                        <div className="text-sm opacity-70">{booking.email}</div>
                        <div className="text-sm opacity-70">{booking.phone}</div>
                      </div>
                    </td>
                    <td>
                      <div>
                        <div className="font-semibold">{booking.serviceType.replace('-', ' ')}</div>
                        <div className="text-sm opacity-70">{booking.bikeType} Bike</div>
                      </div>
                    </td>
                    <td>
                      <div>
                        <div>{new Date(booking.preferredDate).toLocaleDateString()}</div>
                        <div className="text-sm opacity-70">{booking.preferredTime}</div>
                      </div>
                    </td>
                    <td>
                      <span className={getStatusBadge(booking.status)}>
                        {getStatusText(booking.status)}
                      </span>
                    </td>
                    <td>
                      <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-sm">Update Status</label>
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                          <li><button onClick={() => updateBookingStatus(booking.id, 'pending')}>Pending</button></li>
                          <li><button onClick={() => updateBookingStatus(booking.id, 'confirmed')}>Confirmed</button></li>
                          <li><button onClick={() => updateBookingStatus(booking.id, 'in-progress')}>In Progress</button></li>
                          <li><button onClick={() => updateBookingStatus(booking.id, 'completed')}>Completed</button></li>
                          <li><button onClick={() => updateBookingStatus(booking.id, 'cancelled')}>Cancelled</button></li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
