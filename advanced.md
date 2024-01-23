## 🤔 Advanced Questions


### ❓ I don't have Python installed. How can I run the tool?

You can easily run the scraper in Gitpod, a browser-based development environment. 

Note that the Capsolver API key is needed it to run the tool in Gitpod. (IMPORTANT)

Set it up in just 5 minutes by following these steps:

1. Visit [this link](https://gitpod.io/#https://github.com/sangeeta-dev/outlook-account-generator) and sign up using your GitHub account.

2. Once you're signed up, open the repository in Gitpod.

3. Open `main.py` and pass the API Key to `Outlook.create_accounts`:

```python
Outlook.create_accounts(key="CAP-MY_KEY")
```

4. In the terminal, run the following command:
   ```bash
   python main.py
   ```

Please note that after creating some accounts, you will need to use a proxy to create more accounts, like this:

```python
Outlook.create_accounts(key="CAP-MY_KEY", proxies="http://myusername1:mypassword@myproxy-provider.com:8080")
```

### ❓ How to Get Emails Received After a Certain Date?
To get emails from a certain date onwards, use the `received` parameter. 

For example, to get emails after January 1st, 2023 (UTC):

```python
username = "username123"
after = "2023-01-01"
Outlook.get_emails(username, received=after)
```

### ❓ How to Get a Maximum of 10 Emails?
To limit your email retrieval to 10, use the `max` parameter:

```python
username = "username123"
Outlook.get_emails(username, max=10)
```
This fetches the 10 most recent emails in your inbox.

### ❓ How to Get Unread Emails?
To collect all unread emails, use the `Outlook.get_unread_emails` method:

```python
username = "username123"
unread_emails = Outlook.get_unread_emails(username)
print(unread_emails)
```
Note: This action marks unread emails as read.

### ❓ How to Get Spam Emails Along with Primary Emails?
To get both primary and spam emails, set the `with_spam` parameter to `True`:

```python
username = "username123"
emails = Outlook.get_emails(username, with_spam=True)
print(emails)
```

### ❓ How to Use Proxies for Account Creation?
You may use proxies as follows:

```python
proxies = [
    "http://myusername1:mypassword@myproxy-provider.com:8080",
    "http://myusername2:mypassword@myproxy-provider.com:8080",
]
Outlook.create_accounts(count=4, proxies=proxies)
```
Also, we will rotate the proxies automatically.

### ❓ Can the Tool Be Used for Spam or Malicious Activities?
No. It's meant for legitimate uses like business, testing, and personal accounts. Misuse for spam or malicious acts is strictly against Microsoft's policies.

## Your stars are the biggest support for me 💖