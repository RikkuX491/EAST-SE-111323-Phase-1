# Lecture # 7 - PATCH & DELETE Requests
## SWBAT
- [ ] Send a PATCH request using HTML buttons and JavaScript
- [ ] Send a DELETE request using HTML buttons and JavaScript

## PATCH (Update)
`PATCH` requests are requests to update / modify a resource.

- The url in a `PATCH` request requires an id to identify the resource being updated. 
- The HTTP `method` is `'PATCH'`
- The `body` can take the full resource or one property of the resource.

```js
let exampleID = 7

fetch(`http://localhost:3000/foods/${exampleID}`, {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({name: "Spaghetti"})
})
```

## DELETE
`DELETE` requests are requests to remove a resource from the server. Unlike `POST` requests and `PATCH` requests, `DELETE` requests don't require headers or a body, though some backend frameworks may require a header.

`DELETE` requests do require the `method` and the id of the resource being deleted.

```js
let exampleID = 7

fetch(`http://localhost:3000/foods/${exampleID}`, {
    method: 'DELETE'
})
```