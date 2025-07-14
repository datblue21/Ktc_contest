# User Management Application

Ứng dụng quản lý người dùng được xây dựng với React, TypeScript và React Router.

## Tính năng

### Câu 1: UserForm Component (4 điểm)
- ✅ Form với 3 trường: name, email, age
- ✅ Validation cho name (required, min 2 ký tự)
- ✅ Validation cho email (required, định dạng email)  
- ✅ Validation cho age (optional, phải > 0)
- ✅ Console.log dữ liệu khi submit
- ✅ Hiển thị thông báo lỗi validation

### Câu 2: Quản lý trạng thái toàn cục (3 điểm)
- ✅ UserProvider.jsx quản lý trạng thái toàn cục
- ✅ Tích hợp form để thêm người dùng
- ✅ UserList.jsx hiển thị danh sách (age: "N/A" nếu không có)

### Câu 3: Điều hướng và routing (3 điểm)  
- ✅ 3 routes: /, /users, /users/:id
- ✅ Navigation với "Home", "Users"
- ✅ UserDetail.jsx hiển thị chi tiết hoặc "User not found"
- ✅ Link từ UserList đến /users/:id

## Cấu trúc Routes

| Path | Component | Mô tả |
|------|-----------|-------|
| `/` | UserForm + UserList | Form và danh sách người dùng |
| `/users` | UserList | Danh sách, mỗi user có link đến chi tiết |  
| `/users/:id` | UserDetail | Chi tiết user hoặc "User not found" |

## Validation Rules

| Trường | Kiểu | Bắt buộc | Quy tắc | Thông báo lỗi |
|--------|------|----------|---------|---------------|
| name | Text | Có | Required, min 2 ký tự | "Name is required", "Minimum 2 characters" |
| email | Text | Có | Required, định dạng email | "Email is required", "Invalid email" |
| age | Number | Không | Nếu nhập, > 0 | "Age must be positive" |

## Cách chạy

```bash
npm install
npm run dev
```

## Công nghệ sử dụng

- React 19
- TypeScript
- React Router DOM  
- Tailwind CSS
- Vite

## Cấu trúc Project

```typescript
src/
├── components/           # Reusable UI components
│   ├── ui/              # Common UI components
│   │   ├── Layout.tsx   # App layout wrapper
│   │   └── Navigation.tsx # Navigation bar
│   ├── UserForm.tsx     # User creation form
│   ├── UserList.tsx     # User list display
│   └── index.ts         # Component exports
├── pages/               # Page components
│   ├── HomePage.tsx     # Home page (form + list)
│   ├── UsersPage.tsx    # Users listing page
│   ├── UserDetail.tsx   # User detail page
│   └── index.ts         # Page exports
├── context/             # React Context providers
│   ├── UserProvider.tsx # User state management
│   └── index.ts         # Context exports
├── hooks/               # Custom React hooks
│   ├── useUser.ts       # User management hook
│   └── index.ts         # Hook exports
├── types/               # TypeScript type definitions
│   ├── user.ts          # User interface
│   └── index.ts         # Type exports
├── assets/              # Static assets
├── App.tsx              # Main app component
├── main.tsx             # App entry point
└── index.css            # Global styles
```
