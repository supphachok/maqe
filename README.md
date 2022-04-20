# UI

I started with UI create every component from example test, in file index.css I divided into parts of section Defaul HTML values, Post, Options, Option and Button

#### Layout

1. I use flex to responive screen when large screen I will show 2 columns when mobile screen I will show full content.
2. Created image resonsive style by max-width and height.
3. Created title and description of content.
4. Created Options component with reset button.
5. I map data option and text from data.json.
6. Created style for Option button.
7. Created price and actions button.

# Functional

1. I using redux for manage my state.
2. Created store and reducers.
3. Filter part I created set_filter and clear_filter.
4. Data part I created set_skus.
5. Post component I mock to call function when mount into the component for loaded API.
6. After loaded I will get price minimum and maximum from data then show to UI.
7. If I have data I will show Options component.
8. Options component I pass clear_filter to reset button.
9. Then I map options to Option component.
10. Into Option Component when click any button I have function handleFilter to set_filter and set_skus for set data and filter value.
11. after that I check filterFocus from filterReducer and check data in store for disabled some data no value.
12. when I click all of things we will show current value in left side.
