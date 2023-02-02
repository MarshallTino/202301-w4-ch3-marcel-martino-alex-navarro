# DATA

## DATA LAYER

- Phone number
- Is calling (boolean)

## DATA MODIFICATIONS

- Add digit to phone number
- Clear phone number
- Set 'Is calling' (true)
- Set 'Is calling' (false)

# COMPONENTS

## PROVIDER (CONTEXT)

- Contains the function to add a number
- Contains the function to clear the whole number
- Contains the function to call
- Contains the function to hang up
- Contains the phone number data
- Contains the isCalling data

## APP

## INFO

- Receives the 'is calling' status (responsability)

## DISPLAY

- Receives a value and shows the value

## ACTIONS

### ACTION

- One of the 'Action' components takes the function to call
- One of the 'Action' components takes the function to hung up

## KEYBOARD

- Receives isCalling

### KEY

- Takes the function to add a number
- Takes the function to clear the whole number
