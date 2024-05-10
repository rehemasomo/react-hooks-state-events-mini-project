import React, { useState } from "react"; // Import React and useState once

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [task, setTask] = useState({
    text: "",
    category: categories[0],
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onTaskFormSubmit(task);

    setTask({
      text: "",
      category: categories[0],
    });
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={task.text} onChange={handleChange} />
      </label>
      <label>
        Category
        <select name="category" value={task.category} onChange={handleChange}>
          {categories.map(category => (
            // Exclude "All" category
            category !== "All" && (
              <option key={category} value={category}>{category}</option>
            )
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
