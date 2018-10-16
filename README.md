
[![Build](https://travis-ci.org/TrekkingForCharity/ts-odata.svg?branch=master)](https://travis-ci.org/TrekkingForCharity/ts-odata)
[![npm version](https://badge.fury.io/js/ts-odata.svg)](//npmjs.com/package/ts-odata)

# ts-odata-v4

# Changelog
All notable changes to this project will be documented in this file.
ts-odata-v4 is forked [ts-odata project](https://www.npmjs.com/package/ts-odata).

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2018-10-16
### Added
- Support for OData 'Count' keyword
- Support date input

### Removed
- Api documentation removed from this README and into the code. 
- Removed empty typings folder

A typescript library to help generate odata queries
> This is a Typescript port of the javascript library [joData]: https://github.com/mccow002/joData

tsoData creates a javascript object that represents an oData query. This allows you to easily modify parts of your oData query without effecting the rest of it.

tsoData's goal is to implement 

All methods in tsoData are chainable.

## Getting Started

### Creating a TsoData object

To create a TsoData query object, you instantiate it by passing your base uri into the constructor.

	var query = new Tso('http://test.com');
	var query = new Tso('http://test.com');

### .baseUri

The base uri passed in through the constructor can be accessed by calling

	query.baseUri;

### .toString()

To get the query in oData format, call toString off of your query object.

	query.toString();

All further documentation is in the library definitions

##Unsupported Features (for now)

These are the list of features TsoData currently does not support. Hopefully, these features are coming soon.

###Filter

#### Type Functions

* IsOf

###Custom Query Options

TsoData currently does not support any custom query options
