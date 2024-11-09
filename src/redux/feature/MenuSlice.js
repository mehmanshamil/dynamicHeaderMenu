import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [{
    id: 1,
    title: "Smart saatlar",
    items: [
      'Apple',
      'HUAWEI',
      'Xiaomi',
      'Samsung',
      'Garmin',
      'Kieslect',
      'HONOR',
      'Blackview',
      'AMAZFIT'
    ]
  },
  {
    id: 2,
    title: "Notbuklar",
    items: [
      'Apple',
      'HP',
      'MSI',
      'Acer',
      'HUAWEI',
      'Lenovo',
      'Asus',
      'Dell',
      'HONOR',
      'Intel',
      'Tecno',
      'F'
    ]
  },
  {
    id: 3,
    title: "TV brend üzrə",
    items: [
      'Samsung',
      'LG',
      'Sony',
      'Toshiba',
      'Xiaomi',
      'Beko',
      'Hisense',
      'HOFFMANN',
      'TCL',
      'Panasonic',
      'Tesla',
    ]
  }],
  activeItem: null
}




export const MenuSlice = createSlice({
  name: 'menuItem',
  initialState,
  reducers: {
    setActiveItem: (state, action) => {
      state.activeItem = action.payload;
    },
  },
})

export const { setActiveItem } = MenuSlice.actions

export default MenuSlice.reducer