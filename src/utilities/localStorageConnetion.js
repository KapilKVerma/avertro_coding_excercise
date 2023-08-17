const dataKey = "appData";

export const connectLocalStorage = () => {
  localStorage.setItem(
    dataKey,
    JSON.stringify([
      {
        id: 1,
        title: "Lorem ipsum dolor sit amet",
        startDate: new Date(2023, 10, 17),
        endDate: new Date(2023, 12, 17),
        measures: [{ title: "Measure 1" }, { title: "Measure 2" }, { title: "Measure 3" }],
      },
    ])
  );
  return "Local storage initiated.";
};

export const getDataFromLocalStorage = () => {
  const response = localStorage.getItem(dataKey);
  return JSON.parse(response);
};

export const createObjectives = (data) => {
  localStorage.setItem(dataKey, JSON.stringify(data));
  return "Created new objectives successfully.";
};

export const updateObjectives = (data) => {
  localStorage.setItem(dataKey, JSON.stringify(data));
  return "Updated objectives.";
};

export const deleteObjectives = (data) => {
  localStorage.setItem(dataKey, JSON.stringify(data));
  return "Objective deleted.";
};
