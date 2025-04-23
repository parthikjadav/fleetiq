const ROLES = {
  ADMIN: 'admin',
  USER: 'user',
  DRIVER: 'driver',
  DISPATCHER: 'dispatcher',
};

const VEHICLE_STATUS = {
  ACTIVE: 'active',
  RETIRED: 'retired',
  MAINTENANCE: 'maintenance',
}

const ALERT_STATUS = {
  PENDING: 'pending',
  IN_PROGRESS: 'in-progress',
  RESOLVED: 'resolved',
}

const VEHICLE_TYPES = [
  "car",
  "truck",
  "boat",
  "airplane",
  "motorcycle",
]

const FUEL_TYPES = ["petrol", "diesel", "electric", "hybrid"]

const ALERT_SEVERITIES = {
  LOW: 'low',
  MEDIUM: 'medium',
  HIGH: 'high',
}

const DELIVERY_STATUS = ["scheduled", "in-transit", "delivered", "failed"]

module.exports = {
  ROLES,
  VEHICLE_STATUS,
  VEHICLE_TYPES,
  FUEL_TYPES,
  ALERT_STATUS,
  ALERT_SEVERITIES,
  DELIVERY_STATUS
}