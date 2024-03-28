const newTaskInput = document.getElementById("new-task");
const addTaskBtn = document.getElementById("add-task");
const tasksList = document.getElementById("tasks");

addTaskBtn.addEventListener("click", () => {
  const taskText = newTaskInput.value;
  if (taskText === "") {
    return;
  }

  // Tạo element li mới
  const taskItem = document.createElement("li");
  taskItem.textContent = taskText;

  // Thêm element li mới vào danh sách
  tasksList.appendChild(taskItem);

  // Xóa nội dung input
  newTaskInput.value = "";
});
