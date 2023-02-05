### @activities true
### @explicitHints true

# ERPS STEM WEEK :: Barrier - Radio Control & Lights

## Introduction
### Introduction Step @unplugged
In this challenge, we are going to go a bit further with our code for our access barrier, syncing it with some lights.  

Hopefully you already have a working barrier when pressing the ``||input:on button A||`` and ``||input:on button B||`` buttons.  

How about making sure that a traffic light reflects what the barrier is doing. So when the barrier is down, we see a red light, and a green
one when it is up!

**Q - Where you might you see a setup like this?**

  
![Barrier with lights](https://raw.githubusercontent.com/niaxotim/erps-barrier-with-lights-transmitter/master/assets/no_entry.png)

## Setting up our radio
### Step 1
Our BBC micro:bit has an in-built radio transmitter. This transmitter works on different 'channels'.  

We have to set which channel we want to use to transmit, and then listen on the same channel when we receive.  

Let's set our radio channel using a ``||radio:radio set group||`` block - make sure you set it to the channel assigned to you!  

#### ~ tutorialhint
```blocks
radio.setGroup(255)
```

## Setting up our barrier
### Step 2
Like in our basic example, when we turn our barrier on for the first time, it would be good to have a 'default' state, where it is closed.  

We can do this using the ``||Kitronik_ACCESSbit.Move barrier Down||`` block. Let's put this inside our ``||basic.on start||`` block.  


#### ~ tutorialhint
```blocks
radio.setGroup(255)
Kitronik_ACCESSbit.barrierControl(Kitronik_ACCESSbit.BarrierPosition.Down)
```


## Transmitting with movement
### Step 3
Starting with our basic barrier code, which moves the barrier up and down with presses of our buttons,
let's add a ``||radio:radio send string ""||`` block with each button press.


#### ~ tutorialhint
```blocks
input.onButtonPressed(Button.A, function () {
    radio.sendString("")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("")
})
```

### Step 4
Change the string to be sent over the radio to "up" when the barrier moves up, and "down"
whent the barrier moves down.

#### ~ tutorialhint
```blocks
input.onButtonPressed(Button.A, function () {
    radio.sendString("up")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("down")
})
```

### Step 5
Now set the barrier to move up and down when the correct button is pressed.

#### ~ tutorialhint
```blocks
input.onButtonPressed(Button.A, function () {
    radio.sendString("up")
    Kitronik_ACCESSbit.barrierControl(Kitronik_ACCESSbit.BarrierPosition.Up)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("down")
    Kitronik_ACCESSbit.barrierControl(Kitronik_ACCESSbit.BarrierPosition.Down)
})
```

### Step 6
That's it! We've now got some radio transmissions happening each time we move our barrier.  

Connect your BBC micro:bit and click ``|Download|`` to transfer your code.  
  
Make sure that when you power up your micro:bit, the barrier moves to the starting 'down' position.  

### Barrier Basic Tutorial Complete @unplugged
Great work! You're barrier is ready to synchronise with some lights...  

Now we need to create the code to recieve our radio signals on our lights!  
  
![Great job](https://raw.githubusercontent.com/niaxotim/erps-barrier-with-lights-transmitter/master/assets/great_job.png)
