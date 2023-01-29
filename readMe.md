### Setting up the react-router 6

```js
<BrowserRouter>
  <Routes>
    <Route path="/" element={<SharedLayots />}>
      <Route index path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="cocktail/:id" element={<SingleCocktail />} />
      <Route path="*" element={<Error />} />
    </Route>
  </Routes>
</BrowserRouter>
```

### Dynamic Link

```js
<Link className="btn-details" to={`cocktail/${id}`}>
  details
</Link>
```
