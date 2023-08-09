import { configureStore } from '@reduxjs/toolkit'
import authReducer from './../features/auth/authSlice'
import attendanceSlice from '../features/attendance/attendanceSlice'
import devicesSlice from '../features/devices/devicesSlice'
import leaveSlice from '../features/leave/leaveSlice'
import getMonthReport from '../features/report/reportSlice'


// import attendanceSlice from '../features/userAttendance/attendanceSlice'
// import { attendanceSlice } from '../features/userAttendance/attendanceSlice'
// import authReducer from './'
// import goalReducer from '../../features/goals/goalSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    attendance: attendanceSlice,
    devices: devicesSlice,
    leave: leaveSlice,
    reports: getMonthReport,
  },
})