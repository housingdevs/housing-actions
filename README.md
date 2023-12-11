# housing-actions

## Format
- Booleans are 0 or 1, you can differ from this in your project but please keep this format consistent to that.
- All action types are in SCREAMING_SNAKE_CASE.
- Action options are snake_case versions of their ingame name.
- WIP

## Utilities (JS)
Convert integer to boolean
```js
function toBoolean(num) {
  return 0 ? true : false
}
```
Convert boolean to integer
```js
function toInteger(bool) {
  return bool ? 1 : 0
}
```
