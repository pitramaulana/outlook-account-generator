![Outlook Account Generator Demo](https://raw.githubusercontent.com/sangeeta-dev/outlook-account-generator/master/images/outlook-generator-demo.gif)


<div align="center" style="margin-top: 0;">
  <h1>🚀 Outlook Account Generator 📧</h1>
</div>
<em>
  <h5 align="center">(Programming Language - Python 3)</h5>
</em>
<p align="center">
  <a href="#">
    <img alt="outlook-account-generator forks" src="https://img.shields.io/github/forks/sangeeta-dev/outlook-account-generator?style=for-the-badge" />
  </a>
  <a href="#">
    <img alt="Repo stars" src="https://img.shields.io/github/stars/sangeeta-dev/outlook-account-generator?style=for-the-badge&color=yellow" />
  </a>
  <a href="#">
    <img alt="outlook-account-generator License" src="https://img.shields.io/github/license/sangeeta-dev/outlook-account-generator?color=orange&style=for-the-badge" />
  </a>
  <a href="https://github.com/sangeeta-dev/outlook-account-generator/issues">
    <img alt="issues" src="https://img.shields.io/github/issues/sangeeta-dev/outlook-account-generator?color=purple&style=for-the-badge" />
  </a>
</p>
<p align="center">
  <img src="https://views.whatilearened.today/views/github/sangeeta-dev/outlook-account-generator.svg" width="80px" height="28px" alt="View" />
</p>


<p align="center">
  <a href="https://gitpod.io/#https://github.com/sangeeta-dev/outlook-account-generator">
    <img alt="Open in Gitpod" src="https://gitpod.io/button/open-in-gitpod.svg" />
  </a>
</p>

---

> **Disclaimer:** This Outlook Account Generator is provided for educational and testing purposes only. By using this tool, you agree to comply with local and international laws. The authors and contributors are not responsible for any misuse of this software. The tool should not be used for spamming, unethical purposes, or in any unauthorized or illegal manner. Users are responsible for adhering to Microsoft's terms and conditions when using Outlook accounts.

## ⚡ Features and Benefits

1. Accounts are created with human-like names.
2. Save Effort with Automatic Captcha Solving.
3. Proxy Support 
4. Get emails.


Below is an example of what the created Outlook Account looks like:

![sample profile](https://raw.githubusercontent.com/sangeeta-dev/outlook-account-generator/master/images/sample-profile.png)


## 📦 Requirements

To use the tool, you must have Node.js 18+ and Python 3.8+ installed on your PC.

## 🚀 Getting Started

1️⃣ **Clone the Magic 🧙‍♀:**
   ```shell
   git clone https://github.com/sangeeta-dev/outlook-account-generator
   cd outlook-account-generator
   ```
2️⃣ **Install Dependencies 📦:**
   ```shell
   python -m pip install -r requirements.txt
   ```
3️⃣ **Let the Rain of Outlook Accounts Begin 😎:**
   ```shell
   python main.py
   ```

The bot will take care of filling in the required details automatically. You will only be prompted to solve the captcha manually.

![solve captcha](https://raw.githubusercontent.com/sangeeta-dev/outlook-account-generator/master/images/solve-captcha.png)

Accounts will be saved in `profiles.json`.
![Outlook Account](https://raw.githubusercontent.com/sangeeta-dev/outlook-account-generator/master/images/profiles.png)

*Note: If you don't have Nodejs and Python installed or you are facing errors. Follow this Simple FAQ [here](https://github.com/sangeeta-dev/outlook-account-generator/blob/master/advanced.md#-i-dont-have-python-installed-how-can-i-run-the-tool).*

## 🤔 FAQs

### ❓ How to Change the Number of Accounts to Create?

By default, the bot creates 1 account.

To create more accounts, open the `main.py` file and update `Outlook.create_accounts` by adding the `count` parameter. 

This parameter specifies the number of accounts to be created:

```python
Outlook.create_accounts(count=3)
```

The above code will create 3 accounts.

### ❓ How Many Accounts Can I Create?
Outlook will prompt you for phone verification after every 3 accounts. So, you can create 3 accounts, per IP.

![Photo Verification](https://raw.githubusercontent.com/sangeeta-dev/outlook-account-generator/master/images/phone-verification.png)

After creating 3 Accounts, you need to change your IP address.

While there are numerous ways to change your IP, such as using VPNs and proxies, the **fastest**, **simplest**, and best of all, the **free** way is as follows:

1. **Connect your PC to the Internet via a Mobile Hotspot.**
2. **Toggle airplane mode off and on on your mobile device.** This will assign you a new IP address.
3. **Turn the hotspot back on.**

Please note that you need to repeat this process after every 3 accounts. We will automatically prompt you with a beep sound when it's needed like so.

![Prompt Image](https://raw.githubusercontent.com/sangeeta-dev/outlook-account-generator/master/images/prompt-image.png)

### ❓ Can We Solve Captchas Automatically, as Manually Solving Them Is Really Exhausting?

Yes, you can use Captcha Solvers like CapSolver to automatically solve captchas, saving yourself time and effort.

![Captcha Solved](https://raw.githubusercontent.com/sangeeta-dev/outlook-account-generator/master/images/outlook-generator-demo.gif)

To set up automatic Captcha solving, follow these steps:

1. Create a CapSolver account at [capsolver.com](https://dashboard.capsolver.com/passport/register).

  ![Sign Up](https://raw.githubusercontent.com/sangeeta-dev/outlook-account-generator/master/images/capsolver-sign-up.png)

2. Add funds to your CapSolver account using PayPal, cryptocurrencies, or other payment methods. Note that the minimum deposit is $6 (as of 1 December 2023), and additional taxes (around 12% to 18% for most countries) will apply.

  ![Add Funds](https://raw.githubusercontent.com/sangeeta-dev/outlook-account-generator/master/images/add-funds.gif)

3. Copy your API Key.

  ![Store API Key](https://raw.githubusercontent.com/sangeeta-dev/outlook-account-generator/master/images/store-api-key.png)

4. Open `main.py` and Pass the API Key to `Outlook.create_accounts`:

```python
Outlook.create_accounts(key="CAP-MY_KEY")
```

5. Now, Run `python main.py` and the captchas will be automatically solved.

  ![Captcha Solved](https://raw.githubusercontent.com/sangeeta-dev/outlook-account-generator/master/images/outlook-generator-demo.gif)

The bot, when provided with a CapSolver key, will run upto 3 accounts in parallel. We limit running accounts to a maximum of 3 in parallel, as running more leads to detection.

### ❓ How to View All Created Accounts?

You can view the accounts you have created in **`profiles.json`**.

![Outlook Account](https://raw.githubusercontent.com/sangeeta-dev/outlook-account-generator/master/images/profiles.png)

Additionally, you can get a list of all created accounts by using `Outlook.get_accounts`:
```python
accounts = Outlook.get_accounts()
print(accounts)
```

### ❓ How to Get the Latest Received Email?

Use the `Outlook.get_latest_email` method as follows:

```python
username = "username123"
Outlook.get_latest_email(username)
```

Printing and viewing emails in the console is cumbersome. So, we create `output/emails.json` containing the emails. Please open `output/emails.json` to view the emails.

Also, your emails will be displayed in a format similar to this:
![sample email](https://raw.githubusercontent.com/sangeeta-dev/outlook-account-generator/master/images/sample-email.png)

### ❓ How to Get the Email Verification Link When Using Outlook Accounts?

When getting email verification email, you might not always receive the verification email with `Outlook.get_latest_email`.

This is because verification emails can take anywhere from 10 seconds to 1 minute to arrive.

For such cases, it is recommended to use the `Outlook.get_latest_email_for_verification` method. This smart method performs multiple reloads to retrieve the verification email.

Using `Outlook.get_latest_email_for_verification` significantly increases the reliability of obtaining recently arrived verification emails.

Here's how to use `Outlook.get_latest_email_for_verification`:

```python
username = "username123"
Outlook.get_latest_email_for_verification(username)
```


### ❓ How to get all Emails?

Use `Outlook.get_emails` to get all the emails:

```python
username = "username123" 
Outlook.get_emails(username)
```

### ❓ How to Get Emails Received 1 Day/1 Week Ago?

To get emails a specific timeframe ago, use the `received` parameter.

For example, to get emails received 1 week ago, use the following code:

```python
username = "username123"
ago = Outlook.Ago.OneWeekAgo
Outlook.get_emails(username, received=ago)

```

Some popular options for the `received` parameter are:
- Outlook.Ago.TwoMinutesAgo
- Outlook.Ago.OneHourAgo
- Outlook.Ago.OneDayAgo
- Outlook.Ago.OneWeekAgo
- Outlook.Ago.OneMonthAgo
- Outlook.Ago.OneYearAgo

See the list of all supported timeframes [here](https://github.com/sangeeta-dev/outlook-account-generator/blob/master/agos.md)

### ❓ How to Send Email?

To send an email, you can use the `Outlook.send_email` method. Replace the `to` with your personal email.

```python
username = "username123"

to = "my-email@gmail.com" # For testing, replace with your personal email
subject = "Agenda for Team Meeting"
body = "We will discuss the product roadmap in Meeting."

Outlook.send_email(username, to, subject, body)
```

After executing this, check your personal email *primary*/*spam* box to see the sent message.

You can also send emails with HTML content. The following example shows how to send an email with a hyperlink embedded in the body:

```python
username = "username123"

to = "my-email@gmail.com" # For testing, replace with your own email
subject = "Meeting Productivity Article"

body = """I recommend reading <a href='https://www.atlassian.com/work-management/project-collaboration/team-meetings'>this article</a> about improving meeting productivity."""

Outlook.send_email(username, to, subject, body)
```

### ❓ How to Send Multiple Emails with It?

To send multiple emails, use the `Outlook.send_emails` method as follows:

```python
username = "username123"

emails = [
  {
    "to": "my-email@gmail.com",
    "subject": "Presentation Preparation",
    "body": "Have you prepared your presentation?"
  },
  {
    "to": "my-email2@gmail.com",
    "subject": "Rescheduled Meeting",
    "body": "Our meeting has been rescheduled to Wednesday."
  }
]

Outlook.send_emails(username, emails)
```

This method will automatically insert a random delay between each email to make the sending process appear more human-like and avoid account suspension.

### ❓ How to Manually Open the Outlook Website for an Account?

To manually open the Outlook website for a specific account to review emails, use the `Outlook.open` method as follows:

```python
username = "username123"
Outlook.open(username)
```

After running, the specified Outlook account will be open in `outlook.live.com`. You will then be prompted to press Enter once you have finished reviewing your emails.


### ❓ What precautions should be followed to avoid getting banned?

1. Use different IP addresses for each email account by using rotating residential proxies. 

Also ensure that the proxy's country matches the account's creation country. 

You can use pass proxies as follows:
```python
Outlook.send_email(username, to=to, subject=subject, body=body, proxy="http://username:password@ip:port")
Outlook.get_latest_email(username, proxy="http://username:password@ip:port")
```
2. Personalize your emails. Include the recipient's name and company in the subject and body.

3. Avoid sending excessive emails from a single account. Instead distribute it.

### ❓ Advanced Questions

Having read this page, you have all the knowledge needed to effectively use the Outlook Account Generator.

You may choose to explore the following questions based on your interests:

#### For Technical Usage

1. [I don't have Python installed. How can I run the tool?](https://github.com/sangeeta-dev/outlook-account-generator/blob/master/advanced.md#-i-dont-have-python-installed-how-can-i-run-the-tool)
2. [How to Get Emails Received After a Certain Date?](https://github.com/sangeeta-dev/outlook-account-generator/blob/master/advanced.md#-how-to-get-emails-received-after-a-certain-date)
3. [How to Get a Maximum of 10 Emails?](https://github.com/sangeeta-dev/outlook-account-generator/blob/master/advanced.md#-how-to-get-a-maximum-of-10-emails)
4. [How to Get Unread Emails?](https://github.com/sangeeta-dev/outlook-account-generator/blob/master/advanced.md#-how-to-get-unread-emails)
5. [How to Get Spam Emails Along with Primary Emails?](https://github.com/sangeeta-dev/outlook-account-generator/blob/master/advanced.md#-how-to-get-spam-emails-along-with-primary-emails)
6. [How to Use Proxies for Account Creation?](https://github.com/sangeeta-dev/outlook-account-generator/blob/master/advanced.md#-how-to-use-proxies-for-account-creation)

#### For Knowledge

1. [Can the Tool Be Used for Spam or Malicious Activities?](https://github.com/sangeeta-dev/outlook-account-generator/blob/master/advanced.md#-can-the-tool-be-used-for-spam-or-malicious-activities)

## Your stars are the biggest support for me 💖