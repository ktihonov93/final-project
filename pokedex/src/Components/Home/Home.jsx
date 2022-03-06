import './Home.css'

export default function Home() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/archive/artists">
                        <ArtistList />
                    </Route>
                    <Route exact path="/archive/artworks">
                        <ArtworkList />
                    </Route>
                    <Route path="/archive/artists/:id" component={ArtistDetails} />
                    <Route path="/archive/artworks/:id" component={ArtWorkDetails} />
                </Switch>
            </div>
        </Router>
    )
}
