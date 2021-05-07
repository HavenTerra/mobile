import axios from 'axios'

export const createUser = async (username) => {
    await axios.post('https://terra-haven-api.herokuapp.com/create_user', {
      username,
    }).catch()
  }
  
export const getUserInfo = async (username) => {
    let userData = await axios.get(`https://terra-haven-api.herokuapp.com/user_data/${username}`)
    console.log(userData)
    return userData
  }
  
export const makeDeposit = async (username, amount) => {
    let result = await axios.post("https://terra-haven-api.herokuapp.com/deposit", {
      username,
      amount,
    })
    return result
  }
  
export const makeWithdrawal = async (username, amount) => {
    let result = await axios.post("https://terra-haven-api.herokuapp.com/withdraw", {
      username,
      amount,
    })
    return result
  }