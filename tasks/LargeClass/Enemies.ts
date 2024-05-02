export class Enemies {
  private enemies: string[] = [];
  public addEnemy(enemy: string): void {
    this.enemies.push(enemy);
  }

  public removeEnemy(enemy: string): void {
    this.enemies.splice(this.enemies.indexOf(enemy), 1);
  }

  public displayInfo(): void {
    console.log(`Enemies: ${this.enemies}`);
  }
}
