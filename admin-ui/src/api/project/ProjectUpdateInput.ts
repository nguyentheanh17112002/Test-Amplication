import { UserUpdateManyWithoutProjectsInput } from "./UserUpdateManyWithoutProjectsInput";
import { TaskUpdateManyWithoutProjectsInput } from "./TaskUpdateManyWithoutProjectsInput";

export type ProjectUpdateInput = {
  description?: string;
  dueDate?: Date | null;
  name?: string;
  owner?: UserUpdateManyWithoutProjectsInput;
  startDate?: Date | null;
  tasks?: TaskUpdateManyWithoutProjectsInput;
};
