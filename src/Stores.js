import React, { Component } from 'react';
import {Grid, Row, Col, Thumbnail} from 'react-bootstrap';
import Relay from 'react-relay';
import { Link } from 'react-router';


/**
 * A view of a single store that we can use to
 * view that store in detail
 */
class Store extends Component {
    render() {
        var storeId = this.props.params.storeId;

        return (
            <Row>
                <Col md={12}>
                    <h2>Store {storeId}</h2>
                </Col>
            </Row>
        );
    }
}

var StoreContainer = Relay.createContainer(Store, {
    fragments: {
        stores: () => Relay.QL`
            fragment on StoreNodeDefaultConnection {
                edges {
                    node {
                      id,
                      desc,
                      website,
                    }
                }
            }`,
    },
});
exports.StoreContainer = StoreContainer;

exports.StoreQueries = {
    stores: () => Relay.QL`
        query {
            stores (id: $storeId)
        }`,
}


/**
 * A list view of all the stores 
 */

class StorePreview extends Component {
    render() {
        var store = this.props.store;
        var fullWebsite = store.website;

        if (!fullWebsite.startsWith('http://'))
            fullWebsite = 'http://' + fullWebsite;
        
        return (
            <Col xs={6} lg={4}>
                <Thumbnail>
                    <Link to={`/store/${store.id}`}>
                        <h3>{store.desc}</h3>
                    </Link>
                    <p>{store.address}</p>
                    <p>{store.created}</p>
                    <a href={fullWebsite}>({store.website})</a>
                </Thumbnail>
            </Col>
        );
    }
}

class StoresList extends Component {
    render() {
        var stores = this.props.stores;

        // render out the stores
        var StorePreviewElements = stores.edges.map((edge) => {
            var store = edge.node;
            return (
                <StorePreview key={store.id} store={store} />
            )
        })

        return (
            <Grid>
                {StorePreviewElements}
            </Grid>
        );
    }
}

var StoresListContainer = Relay.createContainer(StoresList, {
    fragments: {
        stores: () => Relay.QL`
            fragment on StoreNodeDefaultConnection {
                edges {
                    node {
                      id,
                      desc,
                      address,
                      created,
                      website,
                    }
                }
            }`,
    },
});
exports.StoresListContainer = StoresListContainer;

exports.StoresListQueries = {
    stores: () => Relay.QL`
        query {
            stores
        }`,
}

