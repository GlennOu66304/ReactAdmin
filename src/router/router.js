const router = [
  // Array eleemnt is a obejct, if the array element is a object, then you can access
  // object value with array.object name
  // Arrays are Objects
  // https://www.w3schools.com/js/js_arrays.asp

  // "控制台
  {
    key: "/index",
    title: "控制台",
    icon: "laptop",  
    role: ["user", "information", "product"],
  },

  // 用户管理

  {
    key: "/index/user", // 菜单
    title: "用户管理",
    icon: "laptop",
    role: ["information", "user"], // 角色

    child: [
      {
        key: "/index/user/list",
        title: "用户列表",
        icon: "",
        role: ["user"],
      },

      {
        key: "/index/user/add",
        title: "添加用户",
        icon: "",
        role: ["user"],
      },
    ],
  },

  // 部门管理

  {
    key: "/index/department",
    title: "部门管理",
    icon: "bars",   
    role: ["user"],
    child: [
      {
        key: "/index/department/list",
        title: "部门列表",
        icon: "",
        role: ["user"],
      },
      {
        key: "/index/department/add",
        title: "添加部门",
        icon: "",
        role: ["user"],
      },
    ],
  },

  // "职位管理
  {
    key: "/index/job",
    title: "职位管理",
    icon: "edit",
    role: ["user"],
    child: [
      {
        key: "/index/job/list",
        title: "职位列表",
        icon: "",
      },
      {
        key: "/index/job/add",
        title: "添加职位",
        icon: "",
      },
    ],
  },

  // 职员管理
  {
    title: "职员管理",
    icon: "edit",
    key: "/index/staff",
    child: [
      {
        key: "/index/staff/list",
        title: "职员列表",
        icon: "",
      },
      {
        key: "/index/staff/add",
        title: "添加职员",
        icon: "",
      },
    ],
  },

  //  "请假

  {
    title: "请假",
    icon: "info-circle-o",
    key: "/home/about",
  },

  //   "加班
  {
    title: "加班",
    icon: "info-circle-o",
    key: "/home/abouta",
  },
];
export default router;
