

/**
 * Trims a given text to a specified maximum length and adds ellipsis if the text exceeds the limit.
 *
 * @param {string} text - The text to be trimmed.
 * @param {number} [max=50] - The maximum length of the trimmed text. Defaults to 50 if not provided.
 * @returns {string} The trimmed text with ellipsis added if it exceeds the maximum length.
 */
export function trimText(text:string,max:number = 50){
    if(text.length >= max) return `${text.slice(0,max)}...`
    return text
}