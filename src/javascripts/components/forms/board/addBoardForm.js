const addBoardForm = () => {
  document.querySelector('#modal-body').innerHTML = `<form id="submit-board-form" class="mb-4">
                                                      <div class="form-group text-dark">
                                                        <label for="boardName">Board Name</label>
                                                        <input type="text" class="form-control" id="boardName" aria-describedby="boardName" placeholder="Board Name" required>
                                                      </div>
                                                      <div class="form-group">
                                                        <label for="title">Image URL</label>
                                                        <input type="url" class="form-control" id="url" aria-describedby="imageUrl" placeholder="Image URL" required>
                                                      </div>
                                                      <div class="form-check">
                                                        <input type="checkbox" class="form-check-input" id="favorite">
                                                        <label class="form-check-label" for="favorite">Favorite Board?</label>
                                                      </div>
                                                      <button type="submit" id="submit-board" class="btn btn-primary">Submit Board</button>
                                                    </form>`;
};

export default addBoardForm;
