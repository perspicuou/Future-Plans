// 导入所需的模块或库
const express = require('express');
const bodyParser = require('body-parser');
const database = require('./database'); // 假设存在名为database.js的文件，用于处理数据库操作

// 创建 Express 应用程序
const app = express();
const port = 3000;

// 使用中间件解析请求体
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 添加新功能或路由

// 示例：添加一个新的GET路由，用于获取项目的所有信息
app.get('/projects', (req, res) => {
  // 从数据库获取所有项目信息
  const projects = database.getAllProjects();

  // 将项目信息发送给客户端
  res.json(projects);
});

// 示例：添加一个新的POST路由，用于创建新项目
app.post('/projects', (req, res) => {
  // 从请求体中获取新项目的信息
  const newProject = req.body;

  // 将新项目添加到数据库
  const createdProject = database.createProject(newProject);

  // 将新项目信息发送给客户端
  res.json(createdProject);
});

// 示例：添加更多路由和功能...

// 启动服务器
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});