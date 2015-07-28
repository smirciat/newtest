/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Polls = require('./polls.model');

exports.register = function(socket) {
  Polls.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Polls.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('polls:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('polls:remove', doc);
}