import request from "../utils/request";
// const prefix = "api/rex2019s01-ybss";
// 查询列表
export function getTablePage(params) {
  return request({
    url: `/users/usersTableList`,
    method: "get",
    params
  });
}
// 新增 和 编辑
export function addFrom(params) {
  return request({
    url: `/users/addUser`,
    method: "post",
    params
  });
}
// 删除
export function deleteiItem(params) {
  return request({
    url: `/users/delete`,
    method: "delete",
    params
  });
}
// 修改
export function editForm(params) {
  return request({
    url: `/users/editUser/${params._id}`,
    method: "put",
    params
  });
}
// 登录
export function userLoginRequest(params) {
  return request({
    url: `/users/userLogin`,
    method: "post",
    params
  })
}