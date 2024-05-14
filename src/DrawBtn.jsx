import React, { useState, useEffect } from 'react'
import axios from 'axios'

const DrawBtn = ({handler}) => (
  <button onClick={handler}>Draw</button>
)

export default DrawBtn