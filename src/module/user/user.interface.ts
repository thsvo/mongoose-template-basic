export interface IUser {
    title: string
    author: string
    price: number
    category: 'Fiction' | 'Science' | 'SelfDevelopment' | 'Poetry' | 'Religious'
    description: string
    inStock: boolean
    quantity: number
}
