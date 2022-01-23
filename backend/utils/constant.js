const Constant = {
    //HTTP CODES
    "SUCCESS" : 200,
    "RECORD_ADDED": 201,
    "NO_CONTENT": 204,
    "BAD_REQUEST": 400,
    "UNAUTHENTICATED": 401, //Invalid email or password
    "UNAUTHORIZED": 403, // logged-in/valid-credentials but doesn't have right to access the page, accessing it
    "UNPROCESSABLE_ENTITY": 422,
    "NOT_FOUND" : 404,
    "SERVER_ERROR": 500,

    //Messages
    "SERVER_ERR_MSG" : "Oops! something went wrong",
    "PRODUCT_NOT_FOUND_MSG" : "No Product found",
    "ROUTE_NOT_FOUND_MSG": "Route not found",
    "INVALID_EMAIL_OR_PASSWORD_MSG": "Invalid email or password",
    "TOKEN_NOT_FOUND_MSG": "No token found, Please login first",
    "EMAIL_ALREADY_IN_USE": "Email is used by someone, please use a different email",
    "ORDER_ITEMS_NOT_FOUND": "No order items found, please add items to cart first",
    "ORDER_NOT_CREATED": "Order couldn't be create, please try again a bit later",
    "ORDER_NOT_FOUND": "Order not found",
    "PAYMENT_DETAIL_NOT_UPDATED": "Payment detail couldn't updated, please try again a bit later",
    "NOT_AUTHORIZED_TO_PERFORM_ACTION": "You don't have right to perform this action",
    "USER_NOT_DELETED": "User couldn't be deleted, please try again a bit later",
    "USER_NOT_FOUND": "User not found",
    "USER_DELETED": "User deleted successfully",
    "IMAGE_UPLOADED": "Image uploaded successfully!"
}

module.exports = Constant;