import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ShuffleBtn = ({disable, handler}) => (
  <button disabled={disable} onClick={handler}>Shuffle</button>
)

export default ShuffleBtn