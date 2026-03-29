Here is the content for **Step 4** and the **Challenge** section of your `.md` file, formatted and ready for your repository. 

---

## Step 4: Absolute Positioning & z-index

### Guided Questions:
* **Why does the notice appear on top of the content?** The notice appears on top because it has a higher `z-index` value (`z-index: 2`) than the content box (`z-index: 1`). In CSS, elements with a higher `z-index` are stacked "closer" to the viewer along the z-axis.
    
* **What happens if you swap the z-index values?** If the values are swapped (Content: 2, Notice: 1), the yellow content box will cover the orange notice box. Since the notice is positioned inside or over the content, it becomes hidden behind the yellow background.

---

## Challenge 

### 1. Positioning .notice on the top right corner of .content
To achieve this, the `.notice` must be a **child** of the `.content` div in the HTML, and the `.content` div must have a `position` value other than `static` to act as an anchor.

**HTML:**
```html
<div class="content">
    Main Content
    <div class="notice">Notice!</div>
</div>
```

**CSS:**
```css
.content {
    position: absolute; /* or relative */
    top: 66px;
    left: 200px;
    width: 300px;
    height: 200px;
    z-index: 1;
}

.notice {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;
}
```

### 2. Observations on changing .content position:
* **Relative:** The yellow box stays in the natural document flow (below the sidebar), and the notice stays pinned to its top-right corner.
* **Fixed:** The yellow box "pops out" of the layout and stays stuck to that specific coordinate on the screen even when scrolling. The notice remains pinned to the corner of the yellow box.

### 3. Observations on z-index:
* **Requirement:** `z-index` only works on elements that have a `position` property (relative, absolute, fixed, or sticky). 
* **Stacking:** It creates a "layering" effect. Without it, elements usually stack based on their order in the HTML code (later elements appear on top). `z-index` allows us to override that order.

---

## Reflection Questions

**a. Summarize the differences between CSS position values:**
* **Static:** The default. Elements follow the normal page flow.
* **Relative:** Positioned relative to its original spot. It leaves a "gap" where it used to be.
* **Absolute:** Positioned relative to its nearest "positioned" ancestor (an ancestor that isn't static). It is removed from the normal flow.
* **Fixed:** Positioned relative to the browser window. It stays in the same place even when scrolling.

**b. How does absolute positioning depend on its parent element?**
An absolute element looks up the "family tree" of the HTML. It will position itself relative to the first parent it finds that has a `position` of `relative`, `absolute`, or `fixed`. If it finds none, it uses the `body` (the whole page).

**c. How do you differentiate sticky from fixed?**
* **Fixed** is always stuck to the screen from the start. 
* **Sticky** acts like `relative` until you scroll to a specific point, then it "sticks" like `fixed`. It stays within its parent container and stops sticking once the parent is scrolled out of view.

**d. School Event Webpage Example:**
I would use **fixed** positioning for a "Register Now" button or a "Countdown to Event" banner so it stays visible as users scroll through details. I would use **absolute** positioning for "Sold Out" or "New" badges placed on the top corners of event posters or images to grab attention immediately.

---

Would you like me to double-check any other part of your PSHS seatwork?