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

const VEHICLE_TYPES = ["van","truck","bike","car"]

const FUEL_TYPES = ["petrol","diesel","electric","hybrid"]

const ALERT_TYPES = {
  INFO: 'info',
  WARNING: 'warning',
  CRITICAL: 'critical',
}

const DELIVERY_STATUS = ["scheduled", "in-transit", "delivered", "failed"]

module.exports = {
  ROLES,
  VEHICLE_STATUS,
  VEHICLE_TYPES,
  FUEL_TYPES,
  ALERT_STATUS,
  ALERT_TYPES,
  DELIVERY_STATUS
}