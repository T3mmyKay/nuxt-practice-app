export default defineEventHandler(async (event) => {

    const {name} = useQuery(event);
    const {age} = await useBody();
    return {
        message: `Hello ${name}! You are ${age} years old`
    }
})