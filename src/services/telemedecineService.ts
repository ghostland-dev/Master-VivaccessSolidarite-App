
interface DoctorInfo {
  id: number;
  name: string;
  specialty: string;
  imageUrl?: string;
  availability: string;
  rating: number;
}

interface AppointmentInfo {
  id: number;
  doctorId: number;
  date: string;
  time: string;
  status: 'scheduled' | 'completed' | 'cancelled';
  notes?: string;
}

// Sample data
const doctors: DoctorInfo[] = [
  {
    id: 1,
    name: "د. أحمد محمد",
    specialty: "طب الأسرة",
    availability: "الاثنين، الأربعاء، الجمعة",
    rating: 4.8
  },
  {
    id: 2,
    name: "د. سارة علي",
    specialty: "طب الأطفال",
    availability: "الثلاثاء، الخميس، السبت",
    rating: 4.9
  },
  {
    id: 3,
    name: "د. محمد عبدالله",
    specialty: "الباطنية",
    availability: "الاثنين، الثلاثاء، الأربعاء",
    rating: 4.7
  }
];

const appointments: AppointmentInfo[] = [
  {
    id: 101,
    doctorId: 1,
    date: "2025-03-20",
    time: "10:00",
    status: "scheduled"
  },
  {
    id: 102,
    doctorId: 2,
    date: "2025-03-22",
    time: "11:30",
    status: "scheduled"
  }
];

export const telemedecineService = {
  getDoctors: () => {
    return Promise.resolve(doctors);
  },
  
  getDoctorById: (id: number) => {
    const doctor = doctors.find(doc => doc.id === id);
    return Promise.resolve(doctor);
  },
  
  getAppointments: () => {
    return Promise.resolve(appointments);
  },
  
  scheduleAppointment: (doctorId: number, date: string, time: string) => {
    const newAppointment: AppointmentInfo = {
      id: Date.now(),
      doctorId,
      date,
      time,
      status: 'scheduled'
    };
    
    appointments.push(newAppointment);
    return Promise.resolve(newAppointment);
  },
  
  cancelAppointment: (appointmentId: number) => {
    const index = appointments.findIndex(app => app.id === appointmentId);
    if (index !== -1) {
      appointments[index].status = 'cancelled';
      return Promise.resolve(true);
    }
    return Promise.resolve(false);
  }
};
