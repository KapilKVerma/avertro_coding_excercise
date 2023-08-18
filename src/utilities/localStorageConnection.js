const dataKey = "appData";

export const getDataFromLocalStorage = () => {
  const response = localStorage.getItem(dataKey);
  return JSON.parse(response);
};

export const createObjectives = (data) => {
  let response = localStorage.getItem(dataKey);
  response = JSON.parse(response);
  if (response) response.push(data);
  else response = [data];
  localStorage.setItem(dataKey, JSON.stringify(response));
  return "Stored objective successfully.";
};

export const deleteObjectives = (data) => {
  let response = localStorage.getItem(dataKey);
  response = JSON.parse(response);
  response = response.filter((item) => item.uuid !== data.uuid);
  localStorage.setItem(dataKey, JSON.stringify(response));
  return { message: "Objective deleted.", data: response };
};
