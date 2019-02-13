export class Personne {
  id: number;
  name: string;
  firstname: string;
  age: number;
  job: string;
  path: string;
  cin: number;

  constructor(id= 0, name = '', firstname = '', age = 0, job = '', path = '', cin = 0) {
    this.id = id;
    this.name = name;
    this.firstname = firstname;
    this.age = age;
    this.job = job;
    this.path = path;
    this.cin = cin;
  }
}

