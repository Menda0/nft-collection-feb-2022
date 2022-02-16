export default class Collection{
    name?: string
    description?: string
    // ... other properties
    
    constructor(obj: Partial<Collection> = {}) {
        Object.assign(this, obj)
    }
}