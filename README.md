<div align="center">
    <img src="LOGO.svg" alt="Housetils Logo" height="100">
    <h2>housing-actions</h2>
    <p>A specification for Hypixel Housing actions!</p>
</div>

<br>

**Housing Actions is a specification for the Hypixel Housing action coding system.**
We aim to make our standard easy to use, accessible & readable. Any app can implement this specification, and it'll work with other apps too!

* [Issues & Feedback](https://github.com/housingdevs/housing-actions/issues)
* [List of Actions](https://github.com/housingdevs/housing-actions/blob/main/example/baseConditions.actions.json)
* [Questions](#questions)

> [!WARNING]
> A lot of features listed here are not yet implemented & the spec is likely to change often.
> **Not recommended for use in production.**

## Roadmap
* [x] Actions implemented
* [x] Event Actions implemented
* [ ] Action Holders implemented
* [ ] Example implementations
* [ ] Documentation

## Example
This is what a Conditional would look like that sends a message when you have 5 kills.
```json
[
    {
        "type":"CONDITIONAL", 
        "conditions": [
            {
                "type":"PLAYER_STAT",
                "stat":"Kills",
                "mode":"EQUAL",
                "amount": 5
            }
        ],
        "match_any_condition": false,
        "if_actions": [
            {
                "type":"SEND_MESSAGE",
                "message":"Hello!"
            }
        ],
        "else_actions": [] 
   }
]
```

## Questions
* How do I implement certain systems like functions? It just says null!
    * At this time, there is no standard for it. We recommend that developers make it the name of the item and make it select the first occurence of it in the list.
* Where was this format derived?
    * The format was taken from decrypted NBT tags on Item Actions, we've worked up from there and changed some things for the best consistency possible.
