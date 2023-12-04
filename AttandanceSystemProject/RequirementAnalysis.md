# AttandanceSystemProject

- Client's Requirements:

  We need an attendance system. Students can create their own profile. Admin can see list of students and their attendances. Admin can enable and disable attend button, also this button can be disabled based on a timer. Each time admin enable attend button, students can participate for only once. Each day, student will have time sheet of attendance.
  Students can see their own time logs and attend when enabled.

  //\* Functional Requirements

  \* Admin

  - We will generate a super admin during application installation
  - Admin can create student
  - Admin can delete, update or check students information
  - Admin can change status of a student
  - Admin can check time sheet of a student
  - Admin can enable or disable attendance button
  - Admin can check stats of a given day

  \* Student

- Students can register themselves.
- There will be following account status for a students-
  - Pending
  - Active
  - Reject
- User can login with their credentials
- Pending & Rejected users won't have anything in their profile
- Active users can update their profile info
  - First Name
  - Last Name
  - Email
  - Phone Number
  - Profile Picture
- Active users can change or update their Password
- Active users can see their logs
  - Calender view
  - List view
  - Table view
- Active users can participate in attendance system
- User can logout

// \* Requirement Analysis

- Models:

  - Admin

    - Name
    - Email
    - Password

  - Student

    - Name
    - Email
    - Password
    - AccountStatus

  - User

    - Name
    - Email
    - Password
    - Roles: [Admin, Student, Notice]
    - AccountStatus

  - Profile

    - First Name
    - Last Name
    - Phone No
    - Profile Picture
    - User

  - StudentAttendance

    - UserId
    - CreatedAt: DateTime
    - Admin attendanceId

  - Admin Attendance

    - CreateAt: DateTime
    - Status
    - TimeLimit

  - Student EndPoints

    - POST/ auth/ Login(public)
    - POST/ auth/ Register(public)
    - PATCH/ Profile/ (Privet)
    - PUT/ profile/avatar (privet)
    - PUT/ auth/change-password(privet)
    - GET/time-sheet(privet)
    - GET/ attendance(privet)
    - GET/ AttendanceStats(Privet)

  - Admin EndPoints

    - GET/ users(privet)
    - POST/ users(privet)
    - PATCH/ users/userId(privet)
    - DELETE/ users/userId(privet)
    - GET/ users/userId(privet)
    - GET/ profiles(privet)
    - POST/ Profile(privet)
    - PATCH/ profiles/profileId(privet)
    - DELETE/ profiles/profileId(privet)
    - GET/ profiles/profileId(privet)
    - GET/ time-sheet/ userId(privet)
    - GET/ time-sheet/ stats
    - GET/ attendance/ enable(privet)
    - GET/ attendance/disabled:attendanceId(privet)
