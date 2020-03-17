enum Role {
    ADMIN,
    READ_ONLY,
    AUTHOR
  }
  
  const person: {
    name: string;
    age: number;
    hobbies: string[];
    flavor: [string, string]; // tuple type
    role: Role;
  } = {
    name: 'Romain',
    age: 32,
    hobbies: ['Sports', 'Cooking'],
    flavor: ['chocolate', 'blueberry'],
    role: Role.ADMIN
  };
  
  console.log(person.role)