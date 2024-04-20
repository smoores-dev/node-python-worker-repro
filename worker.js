const { proxify, pymport } = require('pymport');

const time = proxify(pymport('time'));
time.sleep(3);
