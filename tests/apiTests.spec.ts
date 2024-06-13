import { test, expect } from '@playwright/test'

test('API GET request', async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users?page=2')
    expect(response.status()).toBe(200)
    const text = await response.text()
    expect(text).toContain('Michael')

    console.log(await response.json())
})

test('API POST request', async ({ request }) => {
    const response = await request.post('https://reqres.in/api/users', {
        data: {
            "name": "morpheus",
            "job": "leader"
        }
    })

    expect(response.status()).toBe(201)
    const text = await response.text()
    expect(text).toContain('morpheus')

    console.log(await response.json())
})

test('API PUT request', async ({ request }) => {
    const response = await request.put('https://reqres.in/api/users/2', {
        data: {
            "name": "morpheus",
            "job": "zion resident"
        }
    })

    expect(response.status()).toBe(200)
    const text = await response.text()
    expect(text).toContain('zion')

    console.log(await response.json())
})

test('API DELETE request', async ({ request }) => {
    const response = await request.delete('https://reqres.in/api/users/2')
    expect(response.status()).toBe(204)
})