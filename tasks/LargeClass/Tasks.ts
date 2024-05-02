export class Tasks {
  private tasks: string[] = [];
  public addTask(task: string): void {
    this.tasks.push(task);
  }

  public removeTask(task: string): void {
    this.tasks.splice(this.tasks.indexOf(task), 1);
  }

  public displayInfo(): void {
    console.log(`Tasks: ${this.tasks}`);
  }
}
