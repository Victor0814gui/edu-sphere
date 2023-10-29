enum StudentPermission {
  create = "student.create",
  list = "student.list",
}

enum TeacherPermission {
  create = "teacher.create",
  update = "teacher.update",
  list = "teacher.list",
}

enum ManagerPermission {
  create = "manager.create",
  update = "manager.update",
  delete = "manager.delete",
  list = "manager.list",
}

enum SupportPermission {
  list = "support.list",
}

enum AdminPermission {
  create = "admin.create",
  update = "admin.update",
  delete = "admin.delete",
  list = "admin.list",
}

export {
  StudentPermission,
  TeacherPermission,
  ManagerPermission,
  SupportPermission,
  AdminPermission,
};
