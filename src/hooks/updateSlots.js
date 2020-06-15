import React, {useState, useEffect} from 'react';

  export default function updateSlots(initial) {
    const [slot, setSlot] = useState(initial);

    function addSlot() {
      setSlot(prev => prev + 1)
    }

    function subtractSlot() {
      setSlot(prev => prev - 1)
    }

    return {slot: slot, addSlot, subtractSlot };
  }