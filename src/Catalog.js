import React, { Component } from 'react';
import {Pager, Grid, Col, Thumbnail, FormGroup, Form, FormControl, ControlLabel, HelpBlock, Button} from 'react-bootstrap';
import Relay from 'react-relay';
import { Link } from 'react-router';


/**
 * A view of a single catalog item that we can use to edit that item
 */

class Item extends Component {

    constructor(props) {
        super(props);
        this.updateItem = this.updateItem.bind(this);
    }

    updateItem = () => {
    }

    render() {
        var itemId = this.props.params.itemId;
        var item = this.props.catalog.edges[0].node;

        return (
            <Grid>
                <Col xs={9}>
                    <Form componentClass="fieldset">
                            <legend>Item Configuration ({itemId})</legend>

                            <FormGroup controlId="itemDescription">
                                <ControlLabel>Description: </ControlLabel>
                                <FormControl type="text" defaultValue={item.desc}/>
                                <FormControl.Feedback />
                                <HelpBlock>provide a short description of the item.</HelpBlock>
                            </FormGroup>

                            <FormGroup controlId="itemPrice">
                                <ControlLabel>Price: </ControlLabel>
                                <FormControl type="number" step={'0.01'}
                                    defaultValue={item.price} style={{width: '75px', 'paddingRight': '5px'}}/>
                                <FormControl.Feedback />
                                <HelpBlock>items price in dollars.</HelpBlock>
                            </FormGroup>
                        <Button bsStyle="success" onClick={this.updateItem}>Submit</Button>
                    </Form>
                </Col>
            </Grid>
        );
    }
}

var ItemContainer = Relay.createContainer(Item, {
    fragments: {
        catalog: () => Relay.QL`
            fragment on CatalogNodeDefaultConnection {
                edges {
                    node {
                      id,
                      desc,
                      price,
                      start,
                      end,
                    }
                },
            }`,
    },
});
exports.ItemContainer = ItemContainer;

exports.ItemQueries = {
    catalog: () => Relay.QL`
        query {
            catalog (id: $itemId)
        }`,
}


/**
 * A list view of all the catalog items
 */

class ItemPreview extends Component {
    render() {
        var item = this.props.item;
        var thumb = "/media/" + item.thumb;

        return (
            <Col xs={6} lg={4}>
                <Thumbnail href="#" src={thumb}>
                    <Link to={`/catalog/${item.id}`}>
                        <h3>{item.desc}</h3>
                    </Link>
                </Thumbnail>
            </Col>
        );
    }
}

class ItemList extends Component {


    render() {
        var items = this.props.catalog;

        // render out the items
        var ItemPreviewElements = items.edges.map((edge) => {
            var item = edge.node;
            return (
                <ItemPreview key={item.id} item={item} />
            )
        })

        return (
            <div className="container">
                <Grid>
                    {ItemPreviewElements} 
                </Grid>
                <Pager>
                    <Pager.Item disabled previous href="#">&larr; Previous Page</Pager.Item>
                    <Pager.Item disabled next href="#">Next Page &rarr;</Pager.Item>
                </Pager>
            </div>
        );
    }
}

var ItemListContainer = Relay.createContainer(ItemList, {
    fragments: {
        catalog: () => Relay.QL`
            fragment on CatalogNodeDefaultConnection {
                edges {
                    node {
                      id,
                      desc,
                      thumb,
                    },
                    cursor,
                },
                pageInfo {
                    hasNextPage,
                    hasPreviousPage
                },
            }`,
    },
});
exports.ItemListContainer = ItemListContainer;

exports.ItemListQueries = {
    catalog: () => Relay.QL`query { catalog }`,
}

