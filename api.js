"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
// Base URL with optional environment config
const BASE_URL = process.env.API_BASE_URL || 'https://jsonplaceholder.typicode.com';
// 1.Function to get all posts
function getAllPosts() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.get(`${BASE_URL}/posts`);
            console.log('All Posts:', response.data);
            return response.data;
        }
        catch (error) {
            console.error('Error fetching all posts:', error);
            throw error;
        }
    });
}
// 2.Function to get a post by ID
function getPostById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.get(`${BASE_URL}/posts/${id}`);
            console.log(`Post #${id}:`, response.data);
            return response.data;
        }
        catch (error) {
            console.error(`Error fetching post #${id}:`, error);
            throw error;
        }
    });
}
// 3. Function to get comments with nested route
function getPostComments(postId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.get(`${BASE_URL}/posts/${postId}/comments`);
            console.log(`Comments for Post #${postId}:`, response.data);
            return response.data;
        }
        catch (error) {
            console.error(`Error fetching comments for post #${postId}:`, error);
            throw error;
        }
    });
}
// 4.Function to get comment with query format
function getCommentsWithQuery(postId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.get(`${BASE_URL}/comments`, {
                params: { postId },
            });
            console.log(`Comments for Post #${postId} (query):`, response.data);
            return response.data;
        }
        catch (error) {
            console.error(`Error fetching comments with query for post #${postId}:`, error);
            throw error;
        }
    });
}
// 5.Function to create a new post
function createPost(newPost) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.post(`${BASE_URL}/posts`, newPost);
            console.log('Created Post:', response.data);
            return response.data;
        }
        catch (error) {
            console.error('Error creating post:', error);
            throw error;
        }
    });
}
// 6.Function to update a post using PUT
function updatePost(id, updatedPost) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.put(`${BASE_URL}/posts/${id}`, updatedPost);
            console.log(`Using PUT - Updated Post #${id}:`, response.data);
            return response.data;
        }
        catch (error) {
            console.error(`Error updating (PUT) post #${id}:`, error);
            throw error;
        }
    });
}
// 7.Function to update a post using PATCH
function patchPost(id, partialUpdate) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.patch(`${BASE_URL}/posts/${id}`, partialUpdate);
            console.log(`Using PATCH - Updated Post #${id}:`, response.data);
            return response.data;
        }
        catch (error) {
            console.error(`Error patching post #${id}:`, error);
            throw error;
        }
    });
}
// 8.Function to delete a post
function deletePost(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.delete(`${BASE_URL}/posts/${id}`);
            const success = response.status === 200;
            console.log(`Deleted Post #${id}:`, success ? 'Success' : 'Failed');
            return success;
        }
        catch (error) {
            console.error(`Error deleting post #${id}:`, error);
            throw error;
        }
    });
}
// Testing the functions
function runTests() {
    return __awaiter(this, void 0, void 0, function* () {
        // 1. Get all posts
        // await getAllPosts();
        // 2. Get a post by ID
        // await getPostById(1);
        // 3. Get comments for a post using nested route
        // await getPostComments(1);
        // 4. Get comments for a post using query format
        // await getCommentsWithQuery(1);
        // 5. Create a new post
        /* await createPost({
            title: 'New Post',
            body: 'This is a new post.',
            userId: 1
        }); */
        // 6. Update a post using PUT
        /* await updatePost(1, {
            userId: 1,
            id: 1,
            title: 'Replaced by PUT',
            body: 'This post has been updated.'
        }); */
        // 7. Update a post using PATCH
        // await patchPost(1, { title: 'Updated by PATCH' }); 
        // 8. Delete a post
        // await deletePost(1);
    });
}
// call the test function
runTests();
