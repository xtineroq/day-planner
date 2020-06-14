# 05 Third-Party APIs: Work Day Scheduler

This a simple calendar application that allows the user to save events for each hour of the day. This app runs in the browser and feature dynamically updated HTML and CSS powered by jQuery.

```
Libraries used:
Moment.js
Bootstrap
Google Font
Font Awesome
```

## Acceptance Criteria

```
The current day is displayed at the top of the calendar.
Timeblocks for standard business hours have been created.
Each timeblock is color coded to indicate whether it is in the past, present, or future.
When the user clicks into a timeblock, it allows the user to enter an event.
When the user clicks the save button for that timeblock, then the text for that event is saved in local storage.
When the user refreshes the page, then the saved events persist.
```

## Additions

```
Current time has been added at the top of the calendar.
Textarea of timeblocks that are in the past are disabled.
When the user edits an existing event and clicks the save button, the new entry is saved in the local storage.
Clear button which clears both the html and the local storage has been added at the bottom of the page.
Clear button automatically reloads the page.
```

![day-planner-image-top](assets/planner1.png)
![day-planner-image-full](assets/planner2.png)
