export interface TodoInterface {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

export interface TodoTokenizationConsumerInterface {
  type: string;
  data: TodoInterface[];
}
