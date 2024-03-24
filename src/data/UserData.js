import { v4 as uuidv4 } from 'uuid';

let UserList = [
    {
        id: uuidv4(),
        title: "Task 1",
        description: "Nothing to add more",
        priority: '1',
        created: new Date(),
        updated: new Date()
    }
];

export default UserList;