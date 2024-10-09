import { UserTS } from "../types/User";


export const usersMocks: UserTS[] = [
    {
        id: 1,
        username: 'johndoe',
        password: 'password123',
        createdAt: '2024-10-01T10:00:00Z',
        updatedAt: '2024-10-05T12:00:00Z',
    },
    {
        id: 2,
        username: 'janedoe',
        password: 'securePass456',
        createdAt: '2024-09-25T08:30:00Z',
        updatedAt: '2024-10-03T14:20:00Z',
    },
    {
        id: 3,
        username: 'alice',
        password: 'alicePass789',
        createdAt: '2024-09-20T11:45:00Z',
        updatedAt: '2024-09-30T09:10:00Z',
    },
    {
        id: 4,
        username: 'bob',
        password: 'bobSecure098',
        createdAt: '2024-09-18T13:15:00Z',
        updatedAt: '2024-10-01T16:05:00Z',
    },
    {
        id: 5,
        username: 'charlie',
        password: 'charliePass001',
        createdAt: '2024-08-30T09:00:00Z',
        updatedAt: '2024-09-10T17:30:00Z',
    },
];